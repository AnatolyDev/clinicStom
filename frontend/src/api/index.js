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
                                "name" : "Doctor 1",
                                "photo" : "1.jpg"
                            },
                            {
                                "id" : 2,
                                "name" : "Doctor 2",
                                "photo" : "2.jpg"
                            },
                            {
                                "id" : 3,
                                "name" : "Doctor 3",
                                "photo" : "3.jpg"
                            },
                            {
                                "id" : 4,
                                "name" : "Doctor 4",
                                "photo" : "4.jpg"
                            },
                            {
                                "id" : 5,
                                "name" : "Doctor 5",
                                "photo" : "5.jpg"
                            }
                        ]
                    })
                    
                }, 1000)           
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
    },

    getBisyTime(doctor, day) {
        /*const r = {
            "doctor_id" : doctor,
            "day" : day
        }
        return instance.post('/api/reception/', r)
            .then(
                data => {
                    console.log(data);
                    const bisy = data.data.receptions.map(
                        t => t.time
                    )
                    setBisyTime(bisy);
                }
            )*/
        return new Promise((resolve) => {
            setTimeout(
                () => {
                    if (!day) resolve([])
                    else {
                        if (day.getDate() % 2 === 0) {
                            resolve([8, 10, 12])
                        } else {
                            resolve([9, 11])
                        }
                    }
                    
                }
            ,1000)
        })
    }
}