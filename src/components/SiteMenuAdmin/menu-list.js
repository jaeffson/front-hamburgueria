import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import paths from '../../constants.js/path';
import InventorySharpIcon from '@mui/icons-material/InventorySharp';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';

const listLinks = [
    {
id:1,
label: 'Pedidos',
link:paths.Order,
icon:ShoppingBagIcon

},
{
    id:2,
label: 'Listar Produto',
link:paths.ListProducts,
icon:InventorySharpIcon
},
{
    id:3,
label: 'Novo Produto',
link:paths.NewProduct,
icon:AddShoppingCartSharpIcon
}

]
export default listLinks