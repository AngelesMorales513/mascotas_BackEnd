import express , { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

// routes
import usuariosRoutes from './src/routes/usuariosRoutes';
import authRoutes from './src/routes/authRoutes';
import mascotasRoutes from './src/routes/mascotasRoutes';




class Server {

    public app: Application;

    // Constructor de nuestro servidor
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    // Configuración del servidor
    config(): void {
        this.app.set("port", process.env.PORT || 3000);
        this.app.use(morgan("dev"));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    // Rutas para mi APIRest
    routes(): void {
        this.app.use('/mascota', mascotasRoutes)
        this.app.use('/usuario', usuariosRoutes);
        this.app.use('/auth', authRoutes);
    }

    // Inicialización del servidor
    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log("Server on port", this.app.get('port'));
        });
    }
 
}

const server = new Server();
server.start();