import people from "./employee"

export function init() {
  const root = document.createElement("div")
  root.innerHTML = `<p>There are ${people.length} people in the room.</p>`
  document.body.appendChild(root)
}
