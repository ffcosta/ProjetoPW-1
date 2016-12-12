package resteasy;

public class Evento {

	private String titulo;
	private String responsavel;
	private String endereco;
	private String data;
	private String descricao;
	private String foto;
	private String codigo;
	private String categoria;
	
	public Evento() {}
	
	public Evento(String titulo, String responsavel, String endereco, String data, String descricao, String foto, String codigo, String categoria) {
		this.setTitulo(titulo);
		this.setResponsavel(responsavel);
		this.setEndereco(endereco);
		this.setData(data);
		this.setDescricao(descricao);
		this.setFoto(foto);
		this.setCodigo(codigo);
		this.setCategoria(categoria);
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getResponsavel() {
		return responsavel;
	}

	public void setResponsavel(String responsavel) {
		this.responsavel = responsavel;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}

	public String getCodigo() {
		return codigo;
	}

	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}
	
}
