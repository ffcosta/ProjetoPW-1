package resteasy;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;


public class UsuarioModel {
	
	private static final String URL = "jdbc:derby:login;create=true";

	private static Connection obterConexao() throws SQLException {
	    //Estabelecer uma conexão com o banco de dados.
	    //String user = "pwuser";
	   // String password = "12345678";
	    Connection conn = DriverManager
	        .getConnection(URL);
	    return conn;
	  }
	
	public static List<Usuario> listar() throws SQLException {
	    Connection conn = obterConexao();
	    
	    Statement stmt = conn.createStatement();
	    String sql = "select * from admin.login";
	    ResultSet rs = stmt.executeQuery(sql);

	    List<Usuario> listaDeContatos = new ArrayList<Usuario>();
	    while (rs.next()) {
	      // Cria um usuário para o registro.
	    	Usuario usuario = new Usuario();
	    	usuario.setUsuario(rs.getString("usuario"));
	    	usuario.setSenha(rs.getString("senha"));
	    	usuario.setCodigo(rs.getInt("codigo"));
	      // Adiciona o usuário na lista de usuários.
	      listaDeContatos.add(usuario);
	    }
	    conn.close();
	    return listaDeContatos;
	  }

	  public static void inserir(Usuario usuario) throws SQLException {
	    //Obter sentença SQL.

			Connection conn = obterConexao();
	
			 String sql = "insert into admin.login (usuario,senha) values (?, ?)";
				PreparedStatement pstmt = conn.prepareStatement(sql);
	    	pstmt.setString(1, usuario.getUsuario());
	   	 	pstmt.setString(2, usuario.getSenha());
	    	pstmt.execute();
	    conn.close();
	  }

	 public static void alterar(Usuario usuario) throws SQLException {
		    //Obter sentença SQL.
		 	Connection conn = obterConexao();
		    String sql = "update admin.contato set usuario = ?, senha = ? where codigo =?";
		    PreparedStatement pstmt = conn.prepareStatement(sql);
		    pstmt.setString(1, usuario.getUsuario());
		    pstmt.setString(2, usuario.getSenha());
		    pstmt.setInt(3, usuario.getCodigo());
		    pstmt.execute();
		    conn.close();
		  }		

	  public static void excluir(Usuario contato) throws SQLException {
		    
		   Connection conn = obterConexao();
		    
		    //Obter sentença SQL.
		    String sql = "delete from admin.login where codigo = ?";
		    PreparedStatement pstmt = conn.prepareStatement(sql);
		    pstmt.setInt(1, contato.getCodigo());
		    pstmt.execute();
		    
		    conn.close();
		  }
	  
	  
}
