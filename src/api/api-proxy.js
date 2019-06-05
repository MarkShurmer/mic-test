import axios from 'axios';

async function save(contact) {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      params: {
        access_token: '16d4c9c6f097fe3a7ffcd72493d9ac7b',
        pGUID: 'CFFBF53F-6D89-4B5B-8B36-67A97F18EDEB',
        pAccName: 'MicDevtest',
        pPartner: 'MicDevtest',
        name: contact.name,
        business_name: contact.companyName,
        telephone_number: contact.telephone,
        email: contact.email,
      }
    };

    await axios.post('http://mic-leads.dev-test.makeiteasy.com/api/v1/create', {

    }, config);
    return '';

  } catch(err) {
    console.error(err);
    return 'Failed to save';
  }
}

export default save;
