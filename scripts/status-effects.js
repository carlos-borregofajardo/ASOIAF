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
            icon: "modules/ASOIAF/icon/nombre-del-icono.svg",
            description: "+5 a la Defensa en combate."
        },
        {
            id: "CoberturaCompleta",
            label: "Cobertura completa",
            icon: "modules/ASOIAF/icon/nombre-del-icono.svg",
            description: "+10 a la Defensa en combate."
        },
        {
            id: "Penumbra",
            label: "Penumbra",
            icon: "modules/ASOIAF/icon/nombre-del-icono.svg",
            description: "-1D en AGILITY, -1D ATHLETICS, -1D FIGHTING, -1D THIEVERY y -2D MARKSMANSHIP."
        },
        {
            id: "Oscuridad",
            label: "Oscuridad",
            icon: "modules/ASOIAF/icon/nombre-del-icono.svg",
            description: "-2D en AGILITY, -2D ATHLETICS, -2D FIGHTING, -2D THIEVERY y -4D MARKSMANSHIP."
        },
        {
            id: "Sorprendido",
            label: "Sorprendido",
            icon: "modules/ASOIAF/icon/nombre-del-icono.svg",
            description: "+1D FIGHTING y +1D MARKSMANSHIP a los atacantes."
        },
        {
            id: "Montado",
            label: "Montado",
            icon: "modules/ASOIAF/icon/nombre-del-icono.svg",
            description: "+1B contra enemigos a pie, +2 Daño si no se mueve este turno."
        },
        {
            id: "Aplastado",
            label: "Aplastado",
            icon: "modules/ASOIAF/icon/nombre-del-icono.svg",
            description: "-5 Defensa en combate"
        },
        {
            id: "Carga",
            label: "Carga",
            icon: "modules/ASOIAF/icon/nombre-del-icono.svg",
            description: "Cargando hacia un enemigo"
        },
        {
            id: "Indefenso",
            label: "Indefenso",
            icon: "modules/ASOIAF/icon/nombre-del-icono.svg",
            description: "AGILITY no suma para la Defensa, +1D FIGHTING y +1D MARKSMANSHIP a los atacantes"
        },
        {
            id: "Carrera",
            label: "Carrera",
            icon: "modules/ASOIAF/icon/nombre-del-icono.svg",
            description: "-1D FIGHTING y -1D a MARKSMANSHIP a los atacantes hasta el final del turno"
        },
        {
            id: "Cedido",
            label: "Cedido",
            icon: "modules/ASOIAF/icon/nombre-del-icono.svg",
            description: "+2B a la próxima tirada, no puede superar el rango de la habilidad."
        },
        {
            id: "Esquivar",
            label: "Esquivar",
            icon: "modules/ASOIAF/icon/nombre-del-icono.svg",
            description: "Defensa es igual la tirada de AGILITY"
        },
        {
            id: "Elevado",
            label: "Elevado",
            icon: "modules/ASOIAF/icon/nombre-del-icono.svg",
            description: "+1B a FIGHTING."
        },
        {
            id: "Suelo",
            label: "En el suelo",
            icon: "modules/ASOIAF/icon/nombre-del-icono.svg",
            description: "+1D a FIGHTING a los atacantes."
        },
        {
            id: "Apuntado",
            label: "Apuntado",
            icon: "modules/ASOIAF/icon/nombre-del-icono.svg",
            description: "+1D a FIGHTING y +1D MARKSMANSHIP al próximo ataque."
        },
        {
            id: "Cauteloso",
            label: "Cauteloso",
            icon: "modules/ASOIAF/icon/nombre-del-icono.svg",
            description: "-1D a FIGHTING y +3 a la Defensa."
        },
        {
            id: "Temerario",
            label: "Temerario",
            icon: "modules/ASOIAF/icon/nombre-del-icono.svg",
            description: "+1D a FIGHTING y -5 a la Defensa."
        },
        {
            id: "Contraataque",
            label: "Sangrando",
            icon: "modules/ASOIAF/icon/nombre-del-icono.svg",
            description: "Esta contraatacando, +2 al daño básico del arma si el enemigo esta cargando."
        },
        {
            id: "Distraído",
            label: "Distraído",
            icon: "modules/ASOIAF/icon/nombre-del-icono.svg",
            description: "AWARENESS no suma a la Defensa."
        },
        {
            id: "Hostigado",
            label: "Hostigado",
            icon: "modules/ASOIAF/icon/nombre-del-icono.svg",
            description: "-1D a todas las tiradas."
        },
        {
            id: "Aturdido",
            label: "Aturdido",
            icon: "icons/svg/daze.svg",
            description: "-5 a la Defensa."
        },
        {
            id: "Gigante",
            label: "Gigante",
            icon: "modules/ASOIAF/icon/nombre-del-icono.svg",
            description: "-2 a la Defensa."
        },
        {
            id: "Pequeño",
            label: "Pequeño",
            icon: "modules/ASOIAF/icon/nombre-del-icono.svg",
            description: "+2 a la Defensa."
        },
        {
            id: "Apresado",
            label: "Apresado",
            icon: "icons/svg/falling.svg",
            description: "-1 al movimiento, -5 a todas las tiradas."
        },
        {
            id: "Inconsciente",
            label: "Inconsciente",
            icon: "modules/ASOIAF/icon/nombre-del-icono.svg",
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
            icon: "icons/svg/terror.svg"",
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
            icon: "icons/svg/acid.svg"",
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