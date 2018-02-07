function loginDao(connection) {
    this._connection = connection;
};

loginDao.prototype.searchUser = function(params,callback) {
    this._connection.query("select email, password from adminUsers where email = ? and password = ?;", params,callback);
}

module.exports = function(){
    return loginDao;
};
