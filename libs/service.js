export default class Service {
  constructor() {}

  async callPostWithParams(form, apiName) {
    form = form == undefined ? {} : form;
    let params = "?";
    let keys = Object.keys(form);
    keys.forEach((key, index) => {
      if (index == keys.length - 1) {
        params += key + "=" + form[key];
      } else {
        params += key + "=" + form[key] + "&";
      }
    });

    //let url = "http://18.224.158.253/plac/public/api/get-videos" + params;
    let url = "http://18.224.158.253/plac/public/api/" + apiName + params;

    let r = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(async response => {
        let json = await response.json();
        return json;
      })
      .catch(error => {
        return {
          status: false,
          message: JSON.stringify(error)
        };
      });

    return r;
  }

  async callPostWithParamsAndBody(form, formBody, apiName) {
    form = form == undefined ? {} : form;
    let params = "?";
    let keys = Object.keys(form);
    keys.forEach((key, index) => {
      if (index == keys.length - 1) {
        params += key + "=" + form[key];
      } else {
        params += key + "=" + form[key] + "&";
      }
    });

    // let url =
    //   "http://18.224.158.253/plac/public/api/upload-coordinate" + params;
    let url = "http://18.224.158.253/plac/public/api/" + apiName + params;

    let r = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formBody)
    })
      .then(async response => {
        let json = await response.json();
        return json;
      })
      .catch(error => {
        return {
          status: false,
          data: {
            message: "Error in uploading coordinates."
          }
        };
      });

    return r;
  }
}
