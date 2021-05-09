export default class UcetniObdobiSchema {
    static ucetniObdobiGetAll() {
        return {
            "$schema": "http://json-schema.org/draft-04/schema#",
            "type": "array",
            "items": [{
                "type": "object",
                "properties": {
                    "ucetniObdobiMesice": {
                        "type": "array",
                        "items": [{
                            "type": "object",
                            "properties": {
                                "koD_UJ": {
                                    "type": "string"
                                },
                                "koD_UO": {
                                    "type": "string"
                                },
                                "kod": {
                                    "type": "string"
                                },
                                "od": {
                                    "type": "string"
                                },
                                "do": {
                                    "type": "string"
                                },
                                "popis": {
                                    "type": "string"
                                },
                                "zameK_UCT": {
                                    "type": "boolean"
                                },
                                "zameK_DPH": {
                                    "type": "boolean"
                                },
                                "lastModificationTime": {
                                    "type": "string"
                                },
                                "lastModifierId": {
                                    "type": "string"
                                },
                                "creationTime": {
                                    "type": "string"
                                },
                                "creatorId": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "koD_UJ",
                                "koD_UO",
                                "kod",
                                "od",
                                "do",
                                "popis",
                                "zameK_UCT",
                                "zameK_DPH",
                                "lastModificationTime",
                                "lastModifierId",
                                "creationTime",
                                "creatorId"
                            ]
                        }]
                    },
                    "ucetniObdobiKvartaly": {
                        "type": "array",
                        "items": [{
                            "type": "object",
                            "properties": {
                                "koD_UJ": {
                                    "type": "string"
                                },
                                "koD_UO": {
                                    "type": "string"
                                },
                                "kod": {
                                    "type": "string"
                                },
                                "od": {
                                    "type": "string"
                                },
                                "do": {
                                    "type": "string"
                                },
                                "popis": {
                                    "type": "string"
                                },
                                "vykazY_UZAVRENY": {
                                    "type": "boolean"
                                },
                                "lastModificationTime": {
                                    "type": "string"
                                },
                                "lastModifierId": {
                                    "type": "string"
                                },
                                "creationTime": {
                                    "type": "string"
                                },
                                "creatorId": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "koD_UJ",
                                "koD_UO",
                                "kod",
                                "od",
                                "do",
                                "popis",
                                "vykazY_UZAVRENY",
                                "lastModificationTime",
                                "lastModifierId",
                                "creationTime",
                                "creatorId"
                            ]
                        }]
                    },
                    "koD_UJ": {
                        "type": "string"
                    },
                    "kod": {
                        "type": "string"
                    },
                    "koD_S": {
                        "type": "string"
                    },
                    "od": {
                        "type": "string"
                    },
                    "do": {
                        "type": "string"
                    },
                    "popis": {
                        "type": "string"
                    },
                    "vykazY_UZAVRENY": {
                        "type": "boolean"
                    },
                    "lastModificationTime": {
                        "type": "string"
                    },
                    "lastModifierId": {
                        "type": "string"
                    },
                    "creationTime": {
                        "type": "string"
                    },
                    "creatorId": {
                        "type": "string"
                    }
                },
                "required": [
                    "ucetniObdobiMesice",
                    "ucetniObdobiKvartaly",
                    "koD_UJ",
                    "kod",
                    "koD_S",
                    "od",
                    "do",
                    "popis",
                    "vykazY_UZAVRENY",
                    "lastModificationTime",
                    "lastModifierId",
                    "creationTime",
                    "creatorId"
                ]
            }]
        }
    }

    static ucetniObdobiGet() {
        return {
            "$schema": "http://json-schema.org/draft-04/schema#",
            "type": "object",
            "properties": {
                "ucetniObdobiMesice": {
                    "type": "array",
                    "items": [{
                        "type": "object",
                        "properties": {
                            "koD_UJ": {
                                "type": "string"
                            },
                            "koD_UO": {
                                "type": "string"
                            },
                            "kod": {
                                "type": "string"
                            },
                            "od": {
                                "type": "string"
                            },
                            "do": {
                                "type": "string"
                            },
                            "popis": {
                                "type": "string"
                            },
                            "zameK_UCT": {
                                "type": "boolean"
                            },
                            "zameK_DPH": {
                                "type": "boolean"
                            },
                            "lastModificationTime": {
                                "type": "string"
                            },
                            "lastModifierId": {
                                "type": "string"
                            },
                            "creationTime": {
                                "type": "string"
                            },
                            "creatorId": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "koD_UJ",
                            "koD_UO",
                            "kod",
                            "od",
                            "do",
                            "popis",
                            "zameK_UCT",
                            "zameK_DPH",
                            "lastModificationTime",
                            "lastModifierId",
                            "creationTime",
                            "creatorId"
                        ]
                    }]
                },
                "ucetniObdobiKvartaly": {
                    "type": "array",
                    "items": [{
                        "type": "object",
                        "properties": {
                            "koD_UJ": {
                                "type": "string"
                            },
                            "koD_UO": {
                                "type": "string"
                            },
                            "kod": {
                                "type": "string"
                            },
                            "od": {
                                "type": "string"
                            },
                            "do": {
                                "type": "string"
                            },
                            "popis": {
                                "type": "string"
                            },
                            "vykazY_UZAVRENY": {
                                "type": "boolean"
                            },
                            "lastModificationTime": {
                                "type": "string"
                            },
                            "lastModifierId": {
                                "type": "string"
                            },
                            "creationTime": {
                                "type": "string"
                            },
                            "creatorId": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "koD_UJ",
                            "koD_UO",
                            "kod",
                            "od",
                            "do",
                            "popis",
                            "vykazY_UZAVRENY",
                            "lastModificationTime",
                            "lastModifierId",
                            "creationTime",
                            "creatorId"
                        ]
                    }]
                },
                "koD_UJ": {
                    "type": "string"
                },
                "kod": {
                    "type": "string"
                },
                "koD_S": {
                    "type": "string"
                },
                "od": {
                    "type": "string"
                },
                "do": {
                    "type": "string"
                },
                "popis": {
                    "type": "string"
                },
                "vykazY_UZAVRENY": {
                    "type": "boolean"
                },
                "lastModificationTime": {
                    "type": "string"
                },
                "lastModifierId": {
                    "type": "string"
                },
                "creationTime": {
                    "type": "string"
                },
                "creatorId": {
                    "type": "string"
                }
            },
            "required": [
                "ucetniObdobiMesice",
                "ucetniObdobiKvartaly",
                "koD_UJ",
                "kod",
                "koD_S",
                "od",
                "do",
                "popis",
                "vykazY_UZAVRENY",
                "lastModificationTime",
                "lastModifierId",
                "creationTime",
                "creatorId"
            ]
        }
    }

    static ucetniObdobiPost() {
        return {
            "$schema": "http://json-schema.org/draft-04/schema#",
            "type": "object",
            "properties": {
                "kod": {
                    "type": "string"
                },
                "koD_S": {
                    "type": "string"
                },
                "od": {
                    "type": "string"
                },
                "do": {
                    "type": "string"
                },
                "popis": {
                    "type": "string"
                }
            },
            "required": [
                "kod",
                "koD_S",
                "od",
                "do",
                "popis"
            ]
        }
    }

    static ucetniObdobiPut() {
        return {
            "$schema": "http://json-schema.org/draft-04/schema#",
            "type": "object",
            "properties": {
                "koD_S": {
                    "type": "string"
                },
                "popis": {
                    "type": "string"
                },
                "vykazY_UZAVRENY": {
                    "type": "boolean"
                },
                "mesice": {
                    "type": "array",
                    "items": [{
                        "type": "object",
                        "properties": {
                            "kod": {
                                "type": "string"
                            },
                            "popis": {
                                "type": "string"
                            },
                            "zameK_UCT": {
                                "type": "boolean"
                            },
                            "zameK_DPH": {
                                "type": "boolean"
                            }
                        },
                        "required": [
                            "kod",
                            "popis",
                            "zameK_UCT",
                            "zameK_DPH"
                        ]
                    }]
                },
                "kvartale": {
                    "type": "array",
                    "items": [{
                        "type": "object",
                        "properties": {
                            "kod": {
                                "type": "string"
                            },
                            "popis": {
                                "type": "string"
                            },
                            "vykazY_UZAVRENY": {
                                "type": "boolean"
                            }
                        },
                        "required": [
                            "kod",
                            "popis",
                            "vykazY_UZAVRENY"
                        ]
                    }]
                }
            },
            "required": [
                "koD_S",
                "popis",
                "vykazY_UZAVRENY",
                "mesice",
                "kvartale"
            ]
        }
    }
}