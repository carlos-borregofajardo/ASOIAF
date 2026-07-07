Hooks.once("init", () => {

    // 1. Importamos la clase original del sistema Chronicle System
    import { CSCharacterActor as OriginalCSCharacterActor }
        from "../../systems/chroniclesystem/module/actors/csCharacterActor.js";

    // 2. Creamos nuestra clase parcheada
    class PatchedCSCharacterActor extends OriginalCSCharacterActor {

        _onCreateEmbeddedDocuments(embeddedName, documents, result, options, userId) {
            return; // parche Foundry v11
        }

        _onDeleteEmbeddedDocuments(embeddedName, documents, result, options, userId) {
            return; // parche Foundry v11
        }

        _onUpdateDescendantDocuments(embeddedName, documents, result, options, userId) {
            return; // parche Foundry v11
        }
    }

    // 3. Sobrescribimos la clase del sistema
    CONFIG.Actor.documentClasses.character = PatchedCSCharacterActor;

});
