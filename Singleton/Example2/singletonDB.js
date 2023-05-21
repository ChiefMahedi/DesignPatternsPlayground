class SingletonDB{
    constructor()
    {
        if(!SingletonDB.instance)
        {
            SingletonDB.instance = this;
            this.connection = null;
        }
        return SingletonDB.instance;
    }
    connect(dbinfo)
    {
        if(this.connection)
        {
            console.log("Already connected!")
            return
        }
        this.connection = true;
        console.log(`User name: ${dbinfo.name} and Password: *******`);
        console.log("Database has been connected");
    }
    query(q)
    {
        if(this.connection)
        {
            console.log(`Executed query: ${q}`);
        }
        else console.log("Not connected to the database");
    }
    disconnect()
    {
        if(this.connection)
        {
            this.connection = false;
            console.log("Successfully disconnected");
        }
        else console.log("Not connected to the database");
    }
}
module.exports = {
    SingletonDB
}