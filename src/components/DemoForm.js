import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DemoList from './DemoList';

const DemoForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [demoData, setDemoData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/fetch`);
      setDemoData(response.data.datas);
    } catch (err) {
      console.log('Error fetching the data..', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/create`, formData);
      alert(response.data.message || 'Data is submitted successfully..');

      setDemoData((prevData) => Array.isArray(prevData) ? [...prevData, formData] : [formData]);

      setFormData({
        name: '',
        email: '',
      });
    } catch (err) {
      console.log('Error creating the data..', err);
    }
  };

  return (
    <div className='container mt-4'>
      <h2 className='mb-4'>Submit Demo Data</h2>

      <form onSubmit={handleSubmit} className='mb-5'>
        <div className='mb-3'>
          <label className='form-label'>Name:</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className='form-control'
            placeholder='Enter name'
            required
          />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Email:</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='form-control'
            placeholder='Enter email'
            required
          />
        </div>

        <button type='submit' className='btn btn-success'>
          Submit
        </button>
      </form>

      <DemoList demoData={demoData} />
    </div>
  );
};

export default DemoForm;
