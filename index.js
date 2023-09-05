const userList = document.getElementById('user-list');
fetch("https://reqres.in/api/users?page=2")
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('La solicitud no fue exitosa');
  })
  .then(data => {
    const users = data.data;
    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.classList.add('list-group-item');
      //innerHTML devuelve o establece la sintaxis HTML describiendo los descendientes del elemento.
      listItem.innerHTML = `
        <div class="media">
        <tr>
          <img src="${user.avatar}" class="mr-3" alt="Avatar">
            <th>  ${user.first_name} ${user.last_name}</th>
            <th>  Id: ${user.id}</th>
            <th>  Correo: ${user.email}</th>
            </tr>
        </div>
      `;
      //con appendchild agrego un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado.
      userList.appendChild(listItem);
    });
  })
