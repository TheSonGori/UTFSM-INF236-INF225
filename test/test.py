import unittest
import requests

class ExamenesTests(unittest.TestCase):
    valid_response_data=None

    @classmethod
    def setUpClass(cls):
        cls.base_url ='http://127.0.0.1:8000/api/examenes-medicos/'
        cls.valid_url_empty_response=cls.base_url+'2020-10-10/Radiografia'
        cls.valid_url_nonempty_response=cls.base_url+'2024-04-20/Ecografia'
        cls.valid_response_data=[
            {"hora_examen": 2 },
            {"hora_examen": 0},
            {"hora_examen": 12}
        ]

    @classmethod
    def tearDownClass(cls):
        del cls.valid_response_data


    def test_base_url_get(self):
        response = requests.get(self.base_url)
        self.assertEqual(404, response.status_code)
        
    def test_base_url_post(self):
        response = requests.post(self.base_url)
        self.assertEqual(405, response.status_code)


    def test_valid_url_nonempty_response_get(self):
        response = requests.get(self.valid_url_nonempty_response)
        self.assertEqual(self.valid_response_data, response.json())

    def test_valid_url_empty_response_get(self):
        response = requests.get(self.valid_url_empty_response)
        self.assertEqual([], response.json())

class LoginTests(unittest.TestCase):
    valid_source_destination_request_data=None
    invalid_source_destination_request_data=None
    valid_response_data=None
    invalid_response_data=None

    @classmethod
    def setUpClass(cls):
        cls.base_url ='http://127.0.0.1:8000/api/login/'
        cls.valid_response_data={
            "token": "f6418a02189ae17629ca053c868e5e3546687c5a",
            "user_type": "medico"
            }
        cls.invalid_response_data={
            "error": "Invalid email or password."
            }
        
        cls.valid_source_destination_request_data={
            "email": "Medico@gmail.com",
            "password":"12345"
            }
        cls.invalid_source_destination_request_data={
            "email": "Medico@gmail.com",
            "password":"Medico"
            }

    @classmethod
    def tearDownClass(cls):
        del cls.valid_source_destination_request_data
        del cls.invalid_source_destination_request_data
        del cls.valid_response_data
        del cls.invalid_response_data

    def test_base_url_get(self):
        response = requests.get(self.base_url)
        self.assertEqual(405, response.status_code)

    def test_base_url_post_empty_data(self):
        response = requests.post(self.base_url)
        self.assertEqual(400, response.status_code)
        self.assertEqual(self.invalid_response_data, response.json())

    def test_valid_login_post(self):
        response = requests.post(self.base_url, json=self.valid_source_destination_request_data)
        self.assertEqual(self.valid_response_data, response.json())
        self.assertEqual(200, response.status_code)

    def test_invalid_login_post(self):
        response = requests.post(self.base_url, json=self.invalid_source_destination_request_data)
        self.assertEqual(self.invalid_response_data, response.json())
    

if __name__ == '__main__':
    unittest.main()
