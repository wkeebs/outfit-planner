async function zappos() {

    const axios = require('axios');

    const options = {
      method: 'POST',
      url: 'https://zappos1.p.rapidapi.com/products/list',
      params: {
        page: '1',
        limit: '100',
        sort: 'relevance/desc'
      },
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'fefc42817bmshae46748d4188e19p1f133ejsn9ba26ec46429',
        'X-RapidAPI-Host': 'zappos1.p.rapidapi.com'
      },
      data: [
        {
          facetField: 'zc1',
          values: ['Clothing']
        },
        {
          facetField: 'zc2',
          values: [
            'Swimwear',
            'Underwear & Intimates'
          ]
        },
        {
          facetField: 'txAttrFacet_Gender',
          values: ['Women', 'Girls']
        }
      ]
    };
    
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }

}

export default zappos