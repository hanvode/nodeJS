module.exports = {
    multipleMongooseToObject: function(mongooseArray){
        return mongooseArray.map(mongoose => mongoose.toObject())
    },
    mongooseToOcject : function (mongoose){
        return mongoose? mongoose.toObject() :mongooses
    }
}