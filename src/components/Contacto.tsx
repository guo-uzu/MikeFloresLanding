
const Contacto = () => {
    return (
        <section>
            <div>
                <div>
                    <p>¿necesitas ayuda con alguna gestión?</p>
                    <div>
                        <p>¡contáctame!</p>
                    </div>
                    <form >
                        <div>
                            <label for="nombre">Nombre Completo:</label>
                            <input type="text" id="nombre" name="nombre"/>
                        </div>
                        <div>
                            <label for="tel">Teléfono:</label>
                            <input type="tel" id="tel" name="tel"/>
                        </div>
                        <div>
                            <label for="email">Correo electrónico:</label>
                            <input type="email" id="email" name="email"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contacto
