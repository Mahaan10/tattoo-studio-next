"use client";

import usePagination from "@/components/hook/usePagination";
import useProducts from "../../shop/useProducts";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Table from "@/components/ui/Table";
import Pagination from "@/components/templates/admin/Pagination";

function ShopTable() {
  const { allProducts, allProductsIsError, allProductsIsLoading } =
    useProducts();

  const { currentPage, setCurrentPage, totalPages, paginatedData } =
    usePagination(allProducts || []);

  useEffect(() => {
    if (allProductsIsError) {
      toast.error("Loading Error");
    }
  }, [allProductsIsError]);

  if (allProductsIsError) {
    return <div className="text-red-500 text-sm">Error!</div>;
  }
  console.log("shopProducts =>", allProducts);
  return (
    <>
      <Table>
        <Table.Header>
          <th className="py-2">Index</th>
          <th>Type</th>
          <th>Price</th>
          <th>Discount</th>
          <th>Active</th>
        </Table.Header>
        <Table.Body>
          {allProductsIsLoading ? (
            [...Array(6)].map((_, i) => (
              <Table.Row key={i}>
                <td colSpan={9}>
                  <div className="h-10 bg-snow/10 animate-pulse rounded" />
                </td>
              </Table.Row>
            ))
          ) : allProducts?.length === 0 ? (
            <Table.Row>
              <td colSpan={4} className="py-4">
                Empty
              </td>
            </Table.Row>
          ) : (
            paginatedData.map((product, index) => (
              //   <ArticlesRow
              //     key={article.id}
              //     article={article}
              //     index={(currentPage - 1) * 6 + index + 1}
              //   />
              <h1>Shops</h1>
            ))
          )}
        </Table.Body>
      </Table>
      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        totalPages={totalPages}
      />
    </>
  );
}

export default ShopTable;
