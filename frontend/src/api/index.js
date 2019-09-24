import axios from 'axios';

const instance =  axios.create(
        {
            baseURL: 'http://172.17.0.1:5000',
            timeout : 5000,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )

export const doctorAPI = {
    getDoctors() {
        /*return instance.get('/api/doctors/')
        .then(
            response => response.data
        )*/
        return new Promise((resolve) => {            
            setTimeout(
                () => {
                    resolve({
                        "doctors" : [
                            {
                                "id" : 1,
                                "name" : "Doctor 1"
                            },
                            {
                                "id" : 2,
                                "name" : "Doctor 2"
                            }
                        ]
                    })
                    
                }, 2000)           
        })
    } 
}

export const receptionAPI = {
    setReceptionForDoctor(day, time, doctor, client, showAlert) {
        const r = {
            "day"  : day,
            "time" : time,
            "doctor_id" : doctor,
            "client" : client
        }
        return instance.post('/api/reception/add/', r)
        .then(data => {
            console.log(data)
        })
        .then(showAlert())
    }
}