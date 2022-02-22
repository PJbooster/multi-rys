import axios from "axios";

export async function getLotto(game, index, size, sort, order = 'DESC') {
    const response = await axios.get(`/lotto?game=${game}&index=${index}&size=${size}&sort=${sort}&order=${order}`);
    return response.data;
}