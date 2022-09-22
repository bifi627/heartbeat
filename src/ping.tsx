import axios from "axios";

export const ping = (url: string) => {
    axios.get(url).then(f => console.log(f.data));
}
ping(process.argv[2]);