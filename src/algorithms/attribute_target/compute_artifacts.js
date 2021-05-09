import * as genshin from "genshin_panel";
import targetFunctionsFunc from "@asset/target_functions/func";
import createCheckFunction from "./create_check_function";
import createFilterFunction from "./create_filter_function";
import applyBuffs from "./apply_buffs";

const RECORD_COUNT = 5;

function getArtifact(myArtifact) {
    let temp = new genshin.ArtifactBuilder()
        .setName(myArtifact.setName)
        .position(myArtifact.position)
        .mainTag(myArtifact.mainTag.name, myArtifact.mainTag.value)
    ;

    for (let tag of myArtifact.normalTags) {
        temp.tag(tag.name, tag.value);
    }

    return temp.build();
}

function getArtifactsSetInfo(arts) {
    let temp = {};
    for (let i of arts) {
        if (i) {
            if (temp[i.setName]) {
                temp[i.setName]++;
            } else {
                temp[i.setName] = 1;
            }
        }
    }

    return temp;
}

function computeArtifacts(artifacts, c, w, tf, buffs, constraint) {
    // filter artifacts
    let filterFunc = createFilterFunction(constraint);
    artifacts = filterFunc(artifacts);


    // get character and weapon
    const character = new genshin.Character(c.name, c.level, c.ascend, 0);
    const weapon = new genshin.Weapon(w.name, w.level, w.ascend, w.refine, w.args);

    // construct target function, given name and args
    let targetFunc = targetFunctionsFunc[tf.name];
    // if need context, artifacts info will be passed as argument during computing
    const needContext = targetFunc.needContext;
    if (targetFunc.needConfig) {
        // the target function need configuration
        targetFunc = targetFunc.func({
            character,
            weapon,
            cArgs: {
                skill1: c.skill1,
                skill2: c.skill2,
                skill3: c.skill3,
                constellation: c.constellation,
            },
            // target function args
            tArgs: tf.args,
        });
    } else {
        targetFunc = targetFunc.func;
    }

    // check(or constraint) function
    const check = createCheckFunction(constraint);

    const flowerCount = Math.max(artifacts.flower.length, 1);
    const featherCount = Math.max(artifacts.feather.length, 1);
    const sandCount = Math.max(artifacts.sand.length, 1);
    const cupCount = Math.max(artifacts.cup.length, 1);
    const headCount = Math.max(artifacts.head.length, 1);

    let maxRecord = [];
    let minIndex = 0;
    for (let floweri = 0; floweri < flowerCount; floweri++) {
        let flower = artifacts.flower[floweri] || null;

        for (let featheri = 0; featheri < featherCount; featheri++) {
            let feather = artifacts.feather[featheri] || null;

            if (!check([flower, feather])) {
                continue;
            }

            for (let sandi = 0; sandi < sandCount; sandi++) {
                let sand = artifacts.sand[sandi] || null;

                if (!check([flower, feather, sand])) {
                    continue;
                }

                for (let cupi = 0; cupi < cupCount; cupi++) {
                    let cup = artifacts.cup[cupi] || null;

                    if (!check([flower, feather, sand, cup])) {
                        continue;
                    }

                    for (let headi = 0; headi < headCount; headi++) {
                        let head = artifacts.head[headi] || null;

                        if (!check([flower, feather, sand, cup, head])) {
                            continue;
                        }

                        let builder = new genshin.AttributeBuilder();
                        builder
                            .character(character)
                            .weapon(weapon)
                        ;
                        if (flower) {
                            builder.artifact(getArtifact(flower));
                        }
                        if (feather) {
                            builder.artifact(getArtifact(feather));
                        }
                        if (sand) {
                            builder.artifact(getArtifact(sand));
                        }
                        if (cup) {
                            builder.artifact(getArtifact(cup));
                        }
                        if (head) {
                            builder.artifact(getArtifact(head));
                        }
                        let attribute = builder.build();

                        // apply buffs
                        applyBuffs(attribute, buffs);

                        let value;
                        if (needContext) {
                            let context = {
                                artifactSet: getArtifactsSetInfo([flower, feather, sand, cup, head]),
                            };
                            value = targetFunc(attribute, context);
                        } else {
                            value = targetFunc(attribute);
                        }
                        
                        if (maxRecord.length < RECORD_COUNT) {
                            maxRecord.push({
                                value,
                                combo: [flower, feather, sand, cup, head],
                                attribute,
                            });
                        } else if (value > maxRecord[minIndex].value) {
                            maxRecord[minIndex] = {
                                value,
                                combo: [flower, feather, sand, cup, head],
                                attribute,
                            };
                            
                            // determine new min value
                            minIndex = 0;
                            maxRecord.forEach((record, index, arr) => {
                                minIndex = record.value < arr[minIndex].value ? index : minIndex;
                            });
                        }

                        // if (value > maxValue) {
                        //     maxCombo = [flower, feather, sand, cup, head];
                        //     maxAttribute = attribute;
                        //     maxValue = value;
                        // }
                    }
                }
            }
        }
    }

    // console.log(maxCombo);

    if (maxRecord.length === 0) {
        return {
            error: {
                reason: "no artifact",
                code: 1000,
                isError: true,
            },
        }
    }

    maxRecord.sort((a, b) => {
        return b.value - a.value;
    });

    return {
        record: maxRecord,
        error: {
            isError: false,
        },
    };
}

// function _test() {
//     let character = new genshin.Character("keqing", 90, false, 0);
//     console.log(character);
// }

export default computeArtifacts;