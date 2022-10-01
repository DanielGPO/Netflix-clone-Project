import MoviesList from "./MoviesList"
import react from 'react'

export const MOVIES = [
    {
        title: 'Spider-man no way home',
        id: 'spider3',
        path: 'https://uploads.jovemnerd.com.br/wp-content/uploads/2022/02/homem-aranha-sem-volta-para-casa-lancamento-plataformas-digitais.jpg',
        description: 'O Homem-Aranha precisa lidar com as consequências da sua verdadeira identidade ter sido descoberta.'
    },
    {
        title:  'The Sandman',
        id: 'Sand',
        path:'https://img.olhardigital.com.br/wp-content/uploads/2022/06/sandman.jpg' ,
        description: 'é o responsável pelo Mundo dos Sonhos, tendo acesso aos sonhos de todas as criaturas que sejam capazes de sonhar.'
    },
    {
        title: 'Brooklyn Nine-Nine',
        id:'Brooklyn' ,
        path: 'https://www.comboinfinito.com.br/principal/wp-content/uploads/2020/07/Brooklyn-99.jpg',
        description: 'Jake Peralta é um detetive brilhante e ao mesmo tempo imaturo, que nunca precisou se preocupar em respeitar as regras. '
    },
    {
        title: 'Stranger Things',
        id: 'Stranger',
        path: 'https://www.printi.com.br/blog/wp-content/uploads/2022/05/stranger-things-3-1-1-1080x475.jpg',
        description: 'Um grupo de amigos se envolve em uma série de eventos sobrenaturais na pacata cidade de Hawkins. Eles enfrentam criaturas monstruosas, agências secretas do governo e se aventuram em dimensões paralelas.'
    },
    {
        title: 'Breaking Bad ',
        id: 'Breaking' ,
        path:'https://occ-0-1217-2705.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABbFI2wcwiGkHDdGWaw58hWgLETOBsbqqv6GbKnZFn3s_Y4fjw0Ys9DNYD5txnfV3oj9tgsBeaSnPcBOwQqQnpHVqHeQr9FtvVzaL.jpg?r=776' ,
        description: 'O professor de química Walter White não acredita que sua vida possa piorar ainda mais. Quando descobre que tem câncer terminal, Walter decide arriscar tudo para ganhar dinheiro enquanto pode, transformando sua van em um laboratório de metanfetamina.'
    },
    {
        title: 'Amor e Monstros',
        id: 'A&M',
        path: 'https://rollingstone.uol.com.br/media/_versions/poster-amor-e-monstros-dylan-obrien-divulgacao-reproducao_widelg.jpg',
        description: 'Sete anos após sobreviver ao apocalipse dos monstros, o azarado Joel Dawson decide se arriscar e abandona o seu bunker para se reencontrar com a sua ex-namorada da escola, Aimee.'
    },
    
]

export const RECOMENDADOS = [
    {
        title: 'Vingança & Castigo',
        id: 'V&C',
        path:'https://beladistopia.com/wp-content/uploads/2022/02/AAAAQYN0m-yxlmaGgxuEH8ueYyzYifIX7-k6JPDV_pwQPVUVyZ6noetARMb4C0eX_6oyC2Xk4fRR7HskfPI0PBWwUDqoIBRG_UMqb_iZmQ4hJJECTzj1ItHnyQ5Mt4cAk1VwqUY3YqDeejAQYmLr3NWAYLCrhbY.jpg' ,
        description: 'Querendo vingança, o bandido Nat Love reúne seu bando para derrotar o impiedoso Rufus Buck, um criminoso que acabou de sair da prisão.'
    },
    {
        title: 'Megamente',
        id: 'Megamente',
        path:'http://s2.glbimg.com/CtPvUiUg4ILPlLgtrOPWMwEdxbo=/s.glbimg.com/og/rg/f/original/2013/12/13/qkjnq4j1.jpg' ,
        description: 'Embora seja o vilão mais brilhante que o mundo já conheceu, Megamente é o menos bem-sucedido. Derrotado repetidamente pelo heroico Metro Man, ele fica surpreso quando finalmente consegue derrotar o seu inimigo de longa data.'
    },
    {
        title: 'A Viagem de Chihiro',
        id:'Chihiro',
        path: 'https://rollingstone.uol.com.br/media/_versions/a_viagem_de_chihiro_foto_divulgacao_studio_ghibli_widelg.jpg',
        description: 'hihiro e seus pais estão se mudando para uma cidade diferente. A caminho da nova casa, o pai decide pegar um atalho. Eles se deparam com uma mesa repleta de comida, embora ninguém esteja por perto. Chihiro sente o perigo, mas seus pais começam a comer. Quando anoitece, eles se transformam em porcos. Agora, apenas Chihiro pode salvá-los.'
    },
    {
        title: 'Agente Oculto',
        id: 'agente',
        path: 'https://occ-0-58-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaH3VeUfxH4u10mxgmzJMrHNzJxmKw_s7J5j0k3Ox7vZNgJW16iPthEm1dAB-gFdjA8dI_-1FKqZLhqb-ZRGnWFjlIP6Gn1M-bqxtkkn2h_Svo55ZS--tp37KqeNsfMDGoZFXQ.jpg?r=fb8',
        description: 'O agente mais valioso da CIA, cuja identidade é desconhecida, descobre segredos da agência e desencadeia uma caçada global por assassinos libertados por seu ex-colega.'
    },
    {
        title: 'Kung Fu Panda 2',
        id:'Panda',
        path:'https://occ-0-3933-987.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABfmHwtB2WGwHEOUHXrY_0PV_Kqk7ehgBV-kwtPk2r5NkRmhHfk9NJVwa3pN1Q7rKz8whXMKEa20vhTfqiTPA2Q2L_f162L0I3Tvv.jpg?r=180',
        description:'Um vilão planeja usar uma arma secreta para conquistar a China e eliminar as artes marciais. Para evitar que isso aconteça, Po precisa descobrir a misteriosa origem do novo inimigo e reunir as forças necessárias para vencê-lo.'
    },
    {
        title:'Scott Pilgrim contra o Mundo',
        id:'pilgrim',
        path:'https://rollingstone.uol.com.br/media/_versions/scott_pilgrim_contra_o_mundo_foto_reproducao_widelg.jpg',
        description:'Guitarrista de uma banda de rock do colégio, o jovem Scott Pilgrim nunca teve problemas para conseguir namorada. O problema sempre foi se livrar delas. Mas com Ramona Flowers é diferente, pois ele se apaixona perdidamente por ela e não será nada fácil conquistar seu amor'
    },
]


export default function MoviePlace(){

    return (
        <main>
            <p className="text-white text-3xl">Most watched</p>
            <MoviesList RowId='1' items ={MOVIES} />
            <p className="text-white text-3xl">For you</p>
            <MoviesList RowId='2' items ={RECOMENDADOS} />
            
        </main>
    )
}