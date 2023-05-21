class Singleton{

    constructor()
    { 
            if(!Singleton.uniqueInstance){
                Singleton.uniqueInstance = this;
                this.singletonData = []
            }
            return Singleton.uniqueInstance
    }
    setSingletonData(data)
    {
        this.singletonData.push(data);
    }
    getSingletonData()
    {
        return this.singletonData
    }

}
module.exports={
    Singleton
}