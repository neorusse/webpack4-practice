import { groupBy } from "lodash-es";
import employee from "./employee";

const managerGroups = groupBy(employee, "manager");

const root = document.createElement('div');
root.innerHTML = `<pre>${JSON.stringify(managerGroups, null, 2)}</pre>`;
document.body.appendChild(root);