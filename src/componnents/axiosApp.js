import axios from "axios";

const axiosApp = () => {
    const updateData = async () => {
        const ENDPOINT = " ",
            res = await axios.get(ENDPOINT),
            [newData] = await res.data;
    }

}

/* correr: run npm apifake */