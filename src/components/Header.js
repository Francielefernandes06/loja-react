const Header = () => {

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Logo</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link active" href="#">Capa <span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link" href="#">Sobre a loja</a>
                        <a class="nav-item nav-link" href="#">Produtos</a>
                        <a class="nav-item nav-link disabled" href="#">Contatos</a>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Header