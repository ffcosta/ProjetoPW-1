package resteasy;

public class Usuario {

	private String usuario;
	private String senha;
	private int codigo;
	
	public Usuario(){
		
	}
	
	
	public Usuario(String usuario, String senha) {
		this.usuario = usuario;
		this.senha = senha;
	}
	
	
	public String getUsuario() {
		return usuario;
	}
	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}


	public int getCodigo() {
		return codigo;
	}


	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}



}
