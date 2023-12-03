<script>
    import { showAdminNavItem } from '../../store/store.js';
	import { createNewProduct } from './../../function/createNewProduct.js';
    let pName ,pUrl,pPrice,pRegPrice,pStock,pImg,pType,pCat,pCatId
    const handleCancel=()=>{
        pName=''
        pUrl=''
        pPrice=''
        pRegPrice=''
        pStock=''
        pImg=''
        pType=''
        pCat=''
        pCatId=''
    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
        if(pPrice > 0 && pRegPrice > 0 && pStock > 0){
            switch (pCatId) {
                case "/men-collection":
                    pCat = "men-collection"
                    break;
                case "/women-collection":
                    pCat = "women-collection"
                    break;
                case "/custom":
                    pCat = "custom"
                    break;
                case "/special-offer":
                    pCat = "/special-offer"
                    break;
            }
            let newProduct={
                p_name:pName,
                p_url:pUrl,
                p_price:pPrice,
                p_reg_price:pRegPrice,
                p_stock:pStock,
                p_img:pImg,
                p_type:pType,
                cat_id:pCatId,
                cat_name:pCat
            }
            // console.log(data)
            let result = await createNewProduct(newProduct)
            if(result){
                showAdminNavItem.set("all-products")
            }
        }
        else{
            alert("Price and Stock must be greater than 0")
        }
    }
</script>
<h1 class="font-bold text-xl md:text-2xl pb-3">Add Products</h1>
<hr>
<form>
    <!-- {p_id,p_name,p_url,cat_id,cat_name,p_price,p_img,p_type,p_reg_price,p_stock}} -->
    <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
<!-- =================Product Name=================== -->
                <div class="sm:col-span-3">
                    <label for="p_name" class="block text-sm font-medium leading-6 text-gray-900">Product name</label>
                    <div class="mt-2">
                    <input bind:value={pName} type="text" name="p_name" id="p_name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>
<!-- ====================Category==================== -->
                <div class="sm:col-span-3">
                    <label for="cat_id" class="block text-sm font-medium leading-6 text-gray-900">Category</label>
                    <div class="mt-2">
                    <select bind:value={pCatId} id="cat_id" name="cat_id" autocomplete="cat_id" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        <option>/men-collection</option>
                        <option>/women-collection</option>
                        <!-- <option>/custom</option>
                        <option>/special-offer</option> -->
                    </select>
                    </div>
                </div>
<!-- =================Product Type=================== -->
                <div class="sm:col-span-3">
                    <label for="p_name" class="block text-sm font-medium leading-6 text-gray-900">Product type</label>
                    <div class="mt-2">
                    <input bind:value={pType} type="text" name="p_name" id="p_name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>
<!-- ====================Product URL================= -->
                <div class="col-span-full">
                    <label for="p_url" class="block text-sm font-medium leading-6 text-gray-900">URL</label>
                    <div class="mt-2">
                        <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm font-nunito">category/</span>
                        <input bind:value={pUrl} type="text" name="p_url" id="p_url"  class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="diamond-ring">
                        </div>
                    </div>
                </div>
                <div class="col-span-full text-center">
                    <hr>
                </div>
    <!-- ================Cover Photo =================== -->
                <!-- <div class="col-span-full">
                    <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
                    <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div class="text-center">
                        <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                        </svg>
                        <div class="mt-4 flex text-sm leading-6 text-gray-600">
                        <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-red-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-red-600 focus-within:ring-offset-0 hover:text-red-500">
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" class="sr-only">
                        </label>
                        <p class="pl-1">or drag and drop</p>
                        </div>
                        <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                    </div>
                </div>
                <div class="col-span-full text-center">
                or
                </div> -->
                <div class="col-span-full">
                <label for="p_img" class="block text-sm font-medium leading-6 text-gray-900">Image URL</label>
                <div class="mt-2">
                    <input bind:value={pImg} type="text" name="p_img" id="p_img"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
                </div>
                <div class="col-span-full text-center">
                    <hr>
                </div>

<!-- =======================Price===================== -->
                <div class="sm:col-span-2 sm:col-start-1">
                    <label for="city" class="block text-sm font-medium leading-6 text-gray-900">Price</label>
                    <div class="mt-2">
                    <input bind:value={pPrice} min="0" type="number" name="city" id="city" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6">
                    </div>
                </div>

            <div class="sm:col-span-2">
                <label for="region" class="block text-sm font-medium leading-6 text-gray-900">Regular Price</label>
                <div class="mt-2">
                <input bind:value={pRegPrice} min="0" type="number" name="region" id="region" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6">
                </div>
            </div>

            <div class="sm:col-span-2">
                <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">Stock</label>
                <div class="mt-2">
                <input bind:value={pStock } min="0" type="number" name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6">
                </div>
            </div>
            </div>
        </div>
  
      
    </div>
  
    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button on:click={handleCancel} type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
      <button on:click={handleSubmit} type="submit" class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Upload</button>
    </div>
</form>

