package resteasy;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("/usuarios")
public class UsuarioController {

	public static List<Usuario> listaUsuarios = new ArrayList<>();
	
	@GET
	@Path("/todos")
	@Produces("application/json")
	public List<Usuario> todos() throws SQLException {
		listaUsuarios = UsuarioModel.listar();
		return listaUsuarios;
	}
	
	
	@POST
	@Path("/cadastrar")
	@Consumes("application/json")
	public void inserirUsuario(Usuario usuario) throws SQLException {
		UsuarioModel.inserir(usuario);
	}
	
	@POST
	@Path("/remover")
	@Consumes("application/json")
	public void removerUsuario(Usuario usuario) throws SQLException {
		UsuarioModel.excluir(usuario);
	}

	@POST
	@Path("/alterar")
	@Consumes("application/json")
	public void alterarUsuario(Usuario usuario) throws SQLException {
		UsuarioModel.alterar(usuario);
	}
	
}