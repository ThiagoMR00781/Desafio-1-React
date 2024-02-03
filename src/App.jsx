import './App.css';
import Accordion from './components/Accordion/Accordion';

function App() {

     const items = [{
        id: 1,
        title: 'Item 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis sapien eu diam finibus, id tristique tellus iaculis. Pellentesque leo metus, posuere id interdum sed, varius gravida felis. Curabitur porttitor rutrum lectus, in vestibulum dui tempor in. Nullam vel dapibus libero. Donec consequat, massa sit amet ornare posuere, massa mauris pellentesque est, vitae bibendum dolor tellus at velit. Pellentesque lacinia magna elit, a mollis lorem aliquet at. Integer quis feugiat leo. Curabitur tempor nisi non viverra porttitor. Praesent pharetra est nulla, eu aliquam ligula lacinia vel. Mauris dictum, dolor id faucibus varius, lectus diam vulputate magna, ut molestie nisi est eget ex. Suspendisse potenti. Donec sollicitudin massa orci, ut feugiat elit convallis aliquam. Donec a accumsan diam.'
    }, 
    {
        id: 3,
        title: 'Item 2',
        content: 'Phasellus sed justo varius dolor iaculis congue id ut nisi. Nunc facilisis eget lectus ac ornare. Etiam feugiat nibh nunc, ac sodales dolor ultrices sed. Maecenas magna dui, posuere in risus id, sodales tristique dolor. In elementum bibendum turpis eget condimentum. Nullam ultricies enim id venenatis luctus. Fusce pulvinar blandit nulla a mattis. Vivamus et erat ullamcorper nunc fringilla gravida. Ut ligula massa, sollicitudin nec neque eu, efficitur rutrum odio.'
    }, 
    {
        id: 3,
        title: 'Item 3',
        content: 'Donec porttitor augue ac purus tincidunt, eu condimentum ipsum aliquam. Vestibulum sed erat eget felis dictum tincidunt vitae sit amet metus. Proin nibh lacus, volutpat ac feugiat ac, tincidunt ac eros. Integer dolor leo, varius vel fringilla at, interdum non neque. Ut sed vestibulum metus, ac commodo libero. Fusce pretium dolor vehicula odio scelerisque pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;'
    }]

    return (
        <div className="App">
            <div className="challenge">
                O desafio de hoje consiste em fazer esse accordion funcionar corretamente.
                Hoje os dados estão fixos porém a ideia é utilizar do array chamado <code>items</code> para
                renderizar cada um dos itens do accordion e controlar a partir da aplicação qual será mostrado e qual não será apresentado na tela.

                <p>Para esse desafio serão utilizados conceitos do javascript como <code>Array.map</code> e conceitos do React como 
                o <code>useState</code> e o <code>useEffect</code>.</p>

                <p>É essencial que quando um Accordion abra, outro feche. A ação de abrir e fechar o Accordion deverá ser
                    feita ao clicar no seu <code>header</code>.</p>
            </div>
            <Accordion 
            items = {items} 
            />
        </div>
    );
}

export default App;
