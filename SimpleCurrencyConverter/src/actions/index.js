import axios from "axios";
export const GET_RATES = "get_rates";

export const getRates = () => {
  return (dispatch) => {
    axios.get("http://data.fixer.io/api/latest?access_key=f6faff1af62a19ab04c8173da40d7664&symbols=EUR,TRY,USD,CAD,JPY")
    .then(response => {
      console.log("response =>");
      console.log(response);
      dispatch({
        type : GET_RATES,
        payload : response.data.rates
      })
    })
  }
}
