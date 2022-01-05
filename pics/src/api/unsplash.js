import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 1Ft-51Rp3OG0QJPcIh1FeiQThOSVBUGoo0FQ4swtURA'
    }
});
