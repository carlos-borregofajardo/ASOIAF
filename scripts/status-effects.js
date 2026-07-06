Hooks.once("init", () => {
    CONFIG.statusEffects = [
        {
            id: "Muerto",
            label: "Muerto",
            icon: "icons/svg/skull.svg",
            description: "Muerto."
        },
        {
            id: "CoberturaMedia",
            label: "Cobertura media",
            icon: "modules/ASOIAF/icon/cobertura-media.svg",
            description: "+5 a la Defensa en combate.",
            changes: [
                {
                    key: "system.defense.total",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: 5
                }
            ]
        },
        {
            id: "CoberturaCompleta",
            label: "Cobertura completa",
            icon: "modules/ASOIAF/icon/cobertura-completa.svg",
            description: "+10 a la Defensa en combate.",
            changes: [
                {
                    key: "system.defense.total",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: 10
                }
            ]
        },
        {
            id: "Penumbra",
            label: "Penumbra",
            icon: "modules/ASOIAF/icon/penumbra.svg",
            description: "-1D en AGILITY, -1D ATHLETICS, -1D FIGHTING, -1D THIEVERY y -2D MARKSMANSHIP.",
            changes: [
                {
                    key: "system.abilities.Agility.dice",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: -1
                },
                {
                    key: "system.abilities.Athletics.dice",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: -1
                },
                {
                    key: "system.abilities.Fighting.dice",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: -1
                },
                {
                    key: "system.abilities.Thievery.dice",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: -1
                },
                {
                    key: "system.abilities.Marksmanship.dice",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: -2
                }
            ]
        },
        {
            id: "Oscuridad",
            label: "Oscuridad",
            icon: "modules/ASOIAF/icon/oscuridad.svg",
            description: "-2D en AGILITY, -2D ATHLETICS, -2D FIGHTING, -2D THIEVERY y -4D MARKSMANSHIP.",
            changes: [
                {
                    key: "system.abilities.Agility.dice",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: -2
                },
                {
                    key: "system.abilities.Athletics.dice",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: -2
                },
                {
                    key: "system.abilities.Fighting.dice",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: -2
                },
                {
                    key: "system.abilities.Thievery.dice",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: -2
                },
                {
                    key: "system.abilities.Marksmanship.dice",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: -4
                }
            ]
        },
        {
            id: "Sorprendido",
            label: "Sorprendido",
            icon: "modules/ASOIAF/icon/sorprendido.svg",
            description: "+1D FIGHTING y +1D MARKSMANSHIP a los atacantes."
        },
        {
            id: "Montado",
            label: "Montado",
            icon: "modules/ASOIAF/icon/montado.svg",
            description: "+1B contra enemigos a pie, +2 Daño si no se mueve este turno."
        },
        {
            id: "Aplastado",
            label: "Aplastado",
            icon: "modules/ASOIAF/icon/aplastado.svg",
            description: "-5 Defensa en combate",
            changes: [
                {
                    key: "system.defense.total",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: -5
                }
            ]
        },
        {
            id: "Carga",
            label: "Carga",
            icon: "modules/ASOIAF/icon/carga.svg",
            description: "Cargando hacia un enemigo"
        },
        {
            id: "Indefenso",
            label: "Indefenso",
            icon: "modules/ASOIAF/icon/indefenso.svg",
            description: "AGILITY no suma para la Defensa, +1D FIGHTING y +1D MARKSMANSHIP a los atacantes",
            changes: [
                {
                    key: "system.defense.total",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: "-@actor.system.abilities.Agility"
                }
            ]
        },
        {
            id: "Carrera",
            label: "Carrera",
            icon: "modules/ASOIAF/icon/carrera.svg",
            description: "-1D FIGHTING y -1D a MARKSMANSHIP a los atacantes hasta el final del turno"
        },
        {
            id: "Cedido",
            label: "Cedido",
            icon: "icons/svg/angel.svg",
            description: "+2B a la próxima tirada, no puede superar el rango de la habilidad."
        },
        {
            id: "Esquivar",
            label: "Esquivar",
            icon: "modules/ASOIAF/icon/esquivando.svg",
            description: "Defensa es igual la tirada de AGILITY",
            changes: [
                {
                    key: "system.defense.total",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: "-@actor.system.abilities.Agility"
                }
            ]
        },
        {
            id: "Elevado",
            label: "Elevado",
            icon: "modules/ASOIAF/icon/elevado.svg",
            description: "+1B a FIGHTING.",
            changes: [
                {
                    key: "system.abilities.Fighting.bonus",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: 1
                }
            ]
        },
        {
            id: "Suelo",
            label: "En el suelo",
            icon: "icons/svg/falling.svg",
            description: "+1D a FIGHTING a los atacantes."
        },
        {
            id: "Apuntado",
            label: "Apuntado",
            icon: "modules/ASOIAF/icon/apuntado.svg",
            description: "+1D a FIGHTING y +1D MARKSMANSHIP al próximo ataque."
        },
        {
            id: "Cauteloso",
            label: "Cauteloso",
            icon: "modules/ASOIAF/icon/cauteloso.svg",
            description: "-1D a FIGHTING y +3 a la Defensa.",
            changes: [
                {
                    key: "system.abilities.Fighting.dice",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: -1
                },
                {
                    key: "system.defense.total",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: 3
                }
            ]
        },
        {
            id: "Temerario",
            label: "Temerario",
            icon: "modules/ASOIAF/icon/temerario.svg",
            description: "+1D a FIGHTING y -5 a la Defensa.",
            changes: [
                {
                    key: "system.abilities.Fighting.dice",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: 1
                },
                {
                    key: "system.defense.total",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: -5
                }
            ]
        },
        {
            id: "Contraataque",
            label: "Contraataque",
            icon: "modules/ASOIAF/icon/contraataque.svg",
            description: "Esta contraatacando, +2 al daño básico del arma si el enemigo esta cargando."
        },
        {
            id: "Distraído",
            label: "Distraído",
            icon: "modules/ASOIAF/icon/distraido.svg",
            description: "AWARENESS no suma a la Defensa.",
            changes: [
                {
                    key: "system.defense.total",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: "-@actor.system.abilities.Awareness"
                }
            ]
        },
        {
            id: "Hostigado",
            label: "Hostigado",
            icon: "modules/ASOIAF/icon/hostigado.svg",
            description: "-1D a todas las tiradas.",
            changes: [
                {
                    key: "system.abilities.Agility.dice",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: -1
                },
                {
                    key: "system.abilities.AnimalHandling.dice",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: -1
                },
                {
                    key: "system.abilities.Athletics.dice",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: -1
                },
                {
                    key: "system.abilities.Awareness.dice",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: -1
                },
                {
                    key: "system.abilities.Cunning.dice",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: -1
                },
                {
                    key: "system.abilities.Endurance.dice",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: -1
                },
                {
                    key: "system.abilities.Fighting.dice",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: -1
                },
                {
                    key: "system.abilities.Marksmanship.dice",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: -1
                },
                {
                    key: "system.abilities.Persuasion.dice",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: -1
                },
                {
                    key: "system.abilities.Stealth.dice",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: -1
                },
                {
                    key: "system.abilities.Thievery.dice",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: -1
                },
                {
                    key: "system.abilities.Will.dice",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: -1
                }
            ]
        },
        {
            id: "Aturdido",
            label: "Aturdido",
            icon: "icons/svg/daze.svg",
            description: "-5 a la Defensa.",
            changes: [
                {
                    key: "system.defense.total",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: -5
                }
            ]
        },
        {
            id: "Gigante",
            label: "Gigante",
            icon: "modules/ASOIAF/icon/gigante.svg",
            description: "-2 a la Defensa.",
            changes: [
                {
                    key: "system.defense.total",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: -2
                }
            ]
        },
        {
            id: "Pequeño",
            label: "Pequeño",
            icon: "modules/ASOIAF/icon/pequeno.svg",
            description: "+2 a la Defensa.",
            changes: [
                {
                    key: "system.defense.total",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: 2
                }
            ]
        },
        {
            id: "Apresado",
            label: "Apresado",
            icon: "icons/svg/net.svg",
            description: "-1 al movimiento, -5 a todas las tiradas.",
            changes: [
                {
                    key: "system.abilities.Agility.total",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: -5
                },
                {
                    key: "system.abilities.AnimalHandling.total",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: -5
                },
                {
                    key: "system.abilities.Athletics.total",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: -5
                },
                {
                    key: "system.abilities.Awareness.total",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: -5
                },
                {
                    key: "system.abilities.Cunning.total",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: -5
                },
                {
                    key: "system.abilities.Endurance.total",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: -5
                },
                {
                    key: "system.abilities.Fighting.total",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: -5
                },
                {
                    key: "system.abilities.Marksmanship.total",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: -5
                },
                {
                    key: "system.abilities.Persuasion.total",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: -5
                },
                {
                    key: "system.abilities.Stealth.total",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: -5
                },
                {
                    key: "system.abilities.Thievery.total",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: -5
                },
                {
                    key: "system.abilities.Will.total",
                    mode: CONST.ACTIVE_EFFECT_MODES.ADD,
                    value: -5
                }
            ]
        },
        {
            id: "Inconsciente",
            label: "Inconsciente",
            icon: "modules/ASOIAF/icon/inconsciente.svg",
            description: "Inconsciente"
        },
        {
            id: "Dormido",
            label: "Dormido",
            icon: "icons/svg/sleep.svg",
            description: "Dormido"
        },
        {
            id: "Asustado",
            label: "Asustado",
            icon: "icons/svg/terror.svg",
            description: "Asustado."
        },
        {
            id: "Quemado",
            label: "Quemado.",
            icon: "icons/svg/fire.svg",
            description: "Quemado."
        },
        {
            id: "Frío",
            label: "Frío",
            icon: "icons/svg/frozen.svg",
            description: "Frío"
        },
        {
            id: "Ácido",
            label: "Ácido",
            icon: "icons/svg/acid.svg",
            description: "Acido."
        },
        {
            id: "Sangrado",
            label: "Sangrado",
            icon: "icons/svg/blood.svg",
            description: "Sangrado"
        },
        {
            id: "Enfermo",
            label: "Enfermo",
            icon: "icons/svg/biohazard.svg",
            description: "Enfermo."
        },
        {
            id: "Envenenado",
            label: "Envenenado",
            icon: "icons/svg/poison.svg",
            description: "Envenenado."
        }
    ];
});