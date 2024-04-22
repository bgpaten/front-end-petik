import React from "react";
import "bulma/css/bulma.min.css";

function DetailProduct() {
  return (
    <div>
      <section className="section mt-5">
        <div class="container">
          <div class="columns">
            <div class="column is-half">
              <figure className="image is4by3">
                <img src="https://picsum.photos/800/600" alt="Product" />
              </figure>
            </div>
            <div class="column">
              <div class="content">
                <div class="title is-4">Product Name</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  error excepturi placeat exercitationem in molestias tempora
                  tempore aperiam cum. Libero quaerat illum autem incidunt
                  deleniti? Minima atque molestiae aperiam aspernatur!
                </p>
                <p>
                  <strong>Price : </strong> Rp 1.000.000,-
                </p>
                <p>Stock</p>
                <div class="field p-5">
                  <button className="button is-primary is-fullwidth has-text-white mb-3">Add to cart</button>
                  <button className="button is-primary is-outlined is-fullwidth is-text-white">Buy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DetailProduct;
