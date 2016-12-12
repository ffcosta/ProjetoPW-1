package resteasy;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class EventoModel {

	private static final String URLL = "jdbc:derby:login;create=true";

	private static Connection obterConexao() throws SQLException {
		// Estabelecer uma conexão com o banco de dados.
		// String user = "pwuser";
		// String password = "12345678";
		Connection conn = DriverManager.getConnection(URLL);
		return conn;
	}

	public static List<Evento> listar() throws SQLException {
		Connection conn = obterConexao();

		Statement stmt = conn.createStatement();
		String sql = "select * from admin.evento";
		ResultSet rs = stmt.executeQuery(sql);

		List<Evento> listaDeEventos = new ArrayList<Evento>();
		while (rs.next()) {
			// Cria um usuário para o registro.
			Evento evento = new Evento();
			evento.setTitulo(rs.getString("titulo"));
			evento.setResponsavel(rs.getString("responsavel"));
			evento.setEndereco(rs.getString("endereco"));
			evento.setData(rs.getString("data"));
			evento.setCategoria(rs.getString("categoria"));
			evento.setDescricao(rs.getString("descricao"));
			evento.setFoto(rs.getString("foto"));
			evento.setCodigo(rs.getString("codigo"));
			// Adiciona o usuário na lista de usuários.
			listaDeEventos.add(evento);
		}
		conn.close();
		return listaDeEventos;
	}

	public static void inserir(Evento evento) throws SQLException {

		Connection conn = obterConexao();

		String sql = "insert into admin.evento values (?, ?, ?, ?, ?, ?, ?, ?)";
		PreparedStatement pstmt = conn.prepareStatement(sql);
		pstmt.setString(1, evento.getTitulo());
		pstmt.setString(2, evento.getResponsavel());
		pstmt.setString(3, evento.getEndereco());
		pstmt.setString(4, evento.getData());
		pstmt.setString(5, evento.getCategoria());
		pstmt.setString(6, evento.getDescricao());
		pstmt.setString(7, evento.getFoto());
		pstmt.setString(8, evento.getCodigo());
		pstmt.execute();
		conn.close();
	}

	public static void remover(Evento evento) throws SQLException {

		Connection conn = obterConexao();

		// Obter sentença SQL.
		String sql = "delete from admin.evento where codigo = ?";
		PreparedStatement pstmt = conn.prepareStatement(sql);
		pstmt.setString(1, evento.getCodigo());
		pstmt.execute();

		conn.close();
	}

	public static void alterar(Evento evento) throws SQLException {
		// Obter sentença SQL.
		Connection conn = obterConexao();
		String sql = "update admin.evento set titulo = ?, responsavel = ?, endereco = ?, data = ?, categoria = ?, descricao = ?, foto = ? where codigo = ?";
		PreparedStatement pstmt = conn.prepareStatement(sql);
		pstmt.setString(1, evento.getTitulo());
		pstmt.setString(2, evento.getResponsavel());
		pstmt.setString(3, evento.getEndereco());
		pstmt.setString(4, evento.getData());
		pstmt.setString(5, evento.getCategoria());
		pstmt.setString(6, evento.getDescricao());
		pstmt.setString(7, evento.getFoto());
		pstmt.setString(8, evento.getCodigo());
		pstmt.execute();
		conn.close();
	}
	
	

}
