

module.exports = {
    async teste(req, res) {
        try {
            return res.json({
                mensagem: "BBBB"
            });
        } catch (err) {
            return res.json({
                status: false,
                mensagem: err.message
            });
        }
    },

}