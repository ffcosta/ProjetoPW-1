package resteasy;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("/eventos")
public class EventoController {

	public static List<Evento> listaDeEventos = new ArrayList<>();

	@GET
	@Path("/todos")
	@Produces("application/json")
	public List<Evento> todos() throws SQLException {
		listaDeEventos = EventoModel.listar();
		return listaDeEventos;
	}
	
	@POST
	@Path("/cadastrar")
	@Consumes("application/json")
	public void inserirEvento(Evento evento) throws SQLException {
		EventoModel.inserir(evento);
	}

	@POST
	@Path("/remover")
	@Consumes("application/json")
	public void removerEvento(Evento evento) throws SQLException {
		EventoModel.remover(evento);
	}
	
	@POST
	@Path("/alterar")
	@Consumes("application/json")
	public void alterarEvento(Evento evento) throws SQLException {
		EventoModel.alterar(evento);
	}
	
/*	@POST
	@Path("/selecionar")
	@Consumes("application/json")
	public void selecionarEvento(String categoria) throws SQLException {
		EventoModel.selecionarEventos(categoria);
	}*/

}
