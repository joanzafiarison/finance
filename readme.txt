app flask et react 
lié aux api freedom24 et trade républic pour avoir une vues sur les positions
https://twelvedata.com/register
https://www.reddit.com/r/webdev/comments/151zk8y/is_there_any_free_stock_market_api_that_allows/?tl=fr&rdt=48664


I -La liste d'actions doit être détaillé (STOCK PICKING) , pour un ETF juste mesurer les indic d'industrie et macro éco.

- avec un volet dépliant présentant les différents indicateurs clés sur la vidéo de finary : 

4 indic fondamentaux 
-PER (price-to-earning ratio) : indique combien les investisseurs paient pour chaque euro de benef d'une entreprise
si faible elle est soit sous évaluée soit risquée
ex : pour 100 € d'action, 10€ de benefice par action, PER = 10

-croissance des bénéfices : l'entreprise est en pleine expansion ou monte tranquillement

-dividendes : Aristocrats ou kings 

-dette sur actifs (ratio) : 

-volatilité  : https://andrieuthomas.com/calcul-de-la-volatilite-finance/#:~:text=Si%20la%20variation%20de%20l,cotation%20dans%20une%20ann%C3%A9e%20%3A%20252


3 indic extra financier 
- avantage compétitif (moat ou douve) ce volet est un descriptif a remplir au cas par cas
ex : apple ecosystème privé 
ex : meta , effet de réseau 

-positionnement sur un marché en forte expansion , représenté par un tag
metaphore du surfeur : surfeur, planche , vague(croissance) 

-qualité de la direction , notes et dirigeant
vision stratégique et historique de succes 
alignment avec les actionnaires

-insider trading
ont ils confiance en leur entreprise
sur la vente et les achats si ils sont significatifs


II- Chiffres macroéconomiques concerne zones, pays

1) taux d'intéret obligation 
2) régulation à l'égard de tel ou tel industrie
3) croissance de certaines industrie
4)taux de change
5) inflation
6)chomage
7) tarif douanier
on peut superposer les courbes des indicateurs macroéconomique et le cours des actifs


III - INdustries 
1)IA 
2) Energie
3)santé 
4)Tech
5)Immo


IV- recherche d'actions par industrie, pays , croissance , PER, croissance , dividendes



V- Configuration du robot pour trade une période donnée , ou revisionnage des trades , sur metatrader , freedom 24



Archi 

server/
    front/
    dist/
    src/
wepback.config.js 
package.json


npm init -y 
npm install react react-dom
npm install typescript ts-loader @types/react @types/react-dom --save-dev
npm install webpack webpack-cli webpack-dev-server html-webpack-plugin clean-webpack-plugin css-loader style-loader babel-loader @babel/core @babel/preset-env @babel/preset-react --save-dev


configuration de webpack.config.js pour fonctionner avec css et typescript



COmment démarrer : 

flask --app app run