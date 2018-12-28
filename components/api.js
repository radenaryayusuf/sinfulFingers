var api =  {
    getRovers(){
        var url = 'http://127.0.0.1:3333/api/v1/tb_game_components';
        return fetch(url).then((res) => res.json()).catch(error => {
                console.warn(error);
                throw error;
              })
    }
}
module.exports = api;