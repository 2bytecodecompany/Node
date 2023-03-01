const dbCollection = require("../database_connections/mongodb_connection");

let docsCollections = dbCollection().then((result) => {

    // const flutterDocs = result.flutterDocsDb;
    const dartDocs = result.dartDocsDb;

    return {
        // Flutter Docs Db Collections.
        // flutter_docs_beginner_title: flutterDocs.collection("beginner_title"),
        // flutter_docs_beginner_docs: flutterDocs.collection("beginner_docs"),
        // flutter_docs_intermediate_title: flutterDocs.collection("intermediate_title"),
        // flutter_docs_intermediate_docs: flutterDocs.collection("intermediate_docs"),
        // flutter_docs_expert_title: flutterDocs.collection("expert_title"),
        // flutter_docs_expert_docs: flutterDocs.collection("expert_docs"),

        // Dart Docs Db Collections.
        dart_docs_beginner_title: dartDocs.collection("beginner_title"),
        dart_docs_beginner_docs: dartDocs.collection("beginner_docs"),
        dart_docs_intermediate_title: dartDocs.collection("intermediate_title"),
        dart_docs_intermediate_docs: dartDocs.collection("intermediate_docs"),
        dart_docs_expert_title: dartDocs.collection("expert_title"),
        dart_docs_expert_docs: dartDocs.collection("expert_docs"),
    };

});

module.exports = docsCollections;