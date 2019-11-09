var config = {
    _id: "consuldemo",
    version: 1,
    members: [{
        _id: 0,
        host: "mongo_1:27017",
    }],
    settings: { 
        chainingAllowed: true 
    }
};
rs.initiate(config, { force: true });
rs.slaveOk();
db.getMongo().setReadPref("nearest");
