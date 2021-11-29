import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  listaProductos:[] = []
  constructor(
    private serviceProducto: ProductosService
  ) { }

  ngOnInit(): void {
    this.obtenerProductos()
  }
  
  obtenerProductos(){
    this.serviceProducto.getProductos().subscribe(data =>{
      console.log(data)
      this.listaProductos = data;

    }, error =>{
      console.log(error);
    })
  }


}
