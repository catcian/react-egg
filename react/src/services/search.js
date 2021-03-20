export function getLists (value) {
  return fetch(`/api/getListsAsync?value=${value}`)
  .then(resp => resp.json())
  .catch(err => console.log(err))
}