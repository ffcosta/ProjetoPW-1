package resteasy;

import java.sql.Date;

public class Evento {

	private String titulo;
	private String responsavel;
	private String endereco;
	private Date data;
	private String descricao;
	private String foto;
	private int codigo;
	private String categoria;
	
	public Evento() {}
	
	public Evento(String titulo, String responsavel, String endereco, Date data, String descricao, String foto, int codigo, String categoria) {
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

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
	}

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}

	public int getCodigo() {
		return codigo;
	}

	public void setCodigo(int codigo) {
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
