// Função para converter pixels em largura da janela de visualização.
// Usando o tamanho da janela de visualização para otimizar a responsividade.

const px2vw = (size: number, width = 1440) => `${(size / width) * 100}vw`

export default px2vw
