
-- Tabla de roles
CREATE TABLE Rol (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) UNIQUE NOT NULL
);

INSERT INTO Rol (nombre) VALUES ('administrador'), ('vendedor'), ('almacenista');

-- Tabla de usuarios
CREATE TABLE Usuario (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(150) UNIQUE NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    rol_id INTEGER REFERENCES Rol(id)
);

-- Tabla de pantallas o funcionalidades
CREATE TABLE Screen (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) UNIQUE NOT NULL,
    descripcion TEXT
);

-- Tabla de permisos por rol y pantalla
CREATE TABLE Permiso (
    id SERIAL PRIMARY KEY,
    rol_id INTEGER REFERENCES Rol(id),
    screen_id INTEGER REFERENCES Screen(id),
    puede_ver BOOLEAN DEFAULT TRUE,
    puede_crear BOOLEAN DEFAULT FALSE,
    puede_editar BOOLEAN DEFAULT FALSE,
    puede_eliminar BOOLEAN DEFAULT FALSE
);

-- Tabla de sucursales
CREATE TABLE Sucursal (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    direccion TEXT
);

-- Tabla de tipos de lista de precios
CREATE TABLE TipoListaPrecio (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) UNIQUE NOT NULL
);

INSERT INTO TipoListaPrecio (nombre) VALUES ('lista 1'), ('lista 2');

-- Tabla de productos (incluye combos como productos)
CREATE TABLE Producto (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    es_combo BOOLEAN DEFAULT FALSE,
    stock_minimo INTEGER DEFAULT 0
);

-- Tabla de relación de productos que componen un combo
CREATE TABLE ProductoCombo (
    id SERIAL PRIMARY KEY,
    combo_id INTEGER REFERENCES Producto(id) ON DELETE CASCADE,
    producto_id INTEGER REFERENCES Producto(id),
    cantidad INTEGER NOT NULL
);

-- Tabla de códigos de barra
CREATE TABLE CodigoBarra (
    id SERIAL PRIMARY KEY,
    producto_id INTEGER REFERENCES Producto(id) ON DELETE CASCADE,
    codigo VARCHAR(100) UNIQUE NOT NULL
);

-- Tabla de lotes
CREATE TABLE Lote (
    id SERIAL PRIMARY KEY,
    codigo_barra_id INTEGER REFERENCES CodigoBarra(id),
    fecha_vencimiento DATE,
    cantidad INTEGER NOT NULL,
    ubicacion VARCHAR(100)
);

-- Tabla de lista de precios por producto y sucursal
CREATE TABLE ListaPrecio (
    id SERIAL PRIMARY KEY,
    producto_id INTEGER REFERENCES Producto(id),
    sucursal_id INTEGER REFERENCES Sucursal(id),
    tipo_lista_id INTEGER REFERENCES TipoListaPrecio(id),
    precio NUMERIC(10,2) NOT NULL
);

-- Tabla de tipos de venta
CREATE TABLE TipoVenta (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) UNIQUE NOT NULL
);

INSERT INTO TipoVenta (nombre) VALUES ('individual'), ('combo');

-- Tabla de estados de venta
CREATE TABLE EstadoVenta (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) UNIQUE NOT NULL
);

INSERT INTO EstadoVenta (nombre) VALUES ('completada'), ('anulada');

-- Tabla de ventas
CREATE TABLE Venta (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER REFERENCES Usuario(id),
    fecha DATE NOT NULL,
    estado_id INTEGER REFERENCES EstadoVenta(id),
    total NUMERIC(10,2) NOT NULL
);

-- Detalle de ventas
CREATE TABLE DetalleVenta (
    id SERIAL PRIMARY KEY,
    venta_id INTEGER REFERENCES Venta(id) ON DELETE CASCADE,
    codigo_barra_id INTEGER REFERENCES CodigoBarra(id),
    producto_id INTEGER REFERENCES Producto(id),
    tipo_venta_id INTEGER REFERENCES TipoVenta(id),
    tipo_lista_id INTEGER REFERENCES TipoListaPrecio(id),
    cantidad INTEGER NOT NULL,
    precio_unitario NUMERIC(10,2) NOT NULL
);

-- Tabla de proveedores
CREATE TABLE Proveedor (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    nit VARCHAR(50) UNIQUE NOT NULL,
    contacto VARCHAR(150),
    telefono VARCHAR(50),
    correo VARCHAR(150),
    direccion TEXT,
    tipo VARCHAR(50) DEFAULT 'nacional'
);

-- Tabla de estados de orden de compra
CREATE TABLE EstadoOrdenCompra (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) UNIQUE NOT NULL
);

INSERT INTO EstadoOrdenCompra (nombre) VALUES ('pendiente'), ('recibida'), ('cancelada');

-- Tabla de ordenes de compra
CREATE TABLE OrdenCompra (
    id SERIAL PRIMARY KEY,
    proveedor_id INTEGER REFERENCES Proveedor(id),
    fecha DATE NOT NULL,
    estado_id INTEGER REFERENCES EstadoOrdenCompra(id),
    observaciones TEXT
);

-- Detalle de ordenes de compra
CREATE TABLE DetalleOrdenCompra (
    id SERIAL PRIMARY KEY,
    orden_id INTEGER REFERENCES OrdenCompra(id) ON DELETE CASCADE,
    producto_id INTEGER REFERENCES Producto(id),
    cantidad_solicitada INTEGER NOT NULL,
    precio_estimado NUMERIC(10,2)
);

-- Tabla de compras
CREATE TABLE Compra (
    id SERIAL PRIMARY KEY,
    proveedor_id INTEGER REFERENCES Proveedor(id),
    fecha DATE NOT NULL,
    total NUMERIC(10,2) NOT NULL
);

-- Relación entre orden de compra y compra efectiva
CREATE TABLE OrdenCompraCompra (
    id SERIAL PRIMARY KEY,
    orden_id INTEGER REFERENCES OrdenCompra(id),
    compra_id INTEGER REFERENCES Compra(id)
);

-- Detalle de compras
CREATE TABLE DetalleCompra (
    id SERIAL PRIMARY KEY,
    compra_id INTEGER REFERENCES Compra(id) ON DELETE CASCADE,
    lote_id INTEGER REFERENCES Lote(id),
    cantidad INTEGER NOT NULL,
    precio_unitario NUMERIC(10,2) NOT NULL
);

-- Tabla de tipos de cuenta financiera
CREATE TABLE TipoCuenta (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) UNIQUE NOT NULL
);

INSERT INTO TipoCuenta (nombre) VALUES ('activo'), ('pasivo'), ('ingreso'), ('egreso');

-- Tabla de cuentas financieras
CREATE TABLE CuentaFinanciera (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    tipo_id INTEGER REFERENCES TipoCuenta(id),
    saldo NUMERIC(12,2) DEFAULT 0
);

-- Tabla de tipos de transacción financiera
CREATE TABLE TipoTransaccion (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) UNIQUE NOT NULL
);

INSERT INTO TipoTransaccion (nombre) VALUES ('ingreso'), ('egreso');

-- Tabla de transacciones financieras
CREATE TABLE TransaccionFinanciera (
    id SERIAL PRIMARY KEY,
    cuenta_id INTEGER REFERENCES CuentaFinanciera(id),
    fecha DATE NOT NULL,
    tipo_id INTEGER REFERENCES TipoTransaccion(id),
    monto NUMERIC(12,2) NOT NULL,
    descripcion TEXT
);

-- Tabla de estados de producción
CREATE TABLE EstadoProduccion (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) UNIQUE NOT NULL
);

INSERT INTO EstadoProduccion (nombre) VALUES ('pendiente'), ('en proceso'), ('finalizado');

-- Tabla de órdenes de producción
CREATE TABLE OrdenProduccion (
    id SERIAL PRIMARY KEY,
    producto_id INTEGER REFERENCES Producto(id),
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE,
    estado_id INTEGER REFERENCES EstadoProduccion(id)
);

-- Tabla de insumos para producción
CREATE TABLE InsumoProduccion (
    id SERIAL PRIMARY KEY,
    orden_id INTEGER REFERENCES OrdenProduccion(id) ON DELETE CASCADE,
    producto_id INTEGER REFERENCES Producto(id),
    cantidad INTEGER NOT NULL
);

-- Tabla de productos terminados
CREATE TABLE ProductoTerminado (
    id SERIAL PRIMARY KEY,
    orden_id INTEGER REFERENCES OrdenProduccion(id) ON DELETE CASCADE,
    lote_id INTEGER REFERENCES Lote(id),
    cantidad INTEGER NOT NULL
);
