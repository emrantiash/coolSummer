import {
  Alert,
  Card,
  Typography,
  List,
  ListItem,
  ListItemSuffix,
} from "@material-tailwind/react";

import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function SideMenu({
  products,
  activeTab,
  setActiveTab,
  onMenuChange,
}) {
  return (
    <Card className="w-[20rem] shadow-xl shadow-blue-gray-900/5">
      <div className="px-4 py-4">
        <Typography variant="h6">Products by MonstarSuite</Typography>
      </div>
      <List>
        {products.map((product, index) => (
          <ListItem
            key={index}
            className={`${product.label === activeTab && "bg-suiteblue/15"}`}
            onClick={() => setActiveTab(product.label)}
          >
            {product.label}
            {activeTab === product.label && (
              <ListItemSuffix>
                <ChevronRightIcon className="h-5 w-5 text-suiteblue" />
              </ListItemSuffix>
            )}
          </ListItem>
        ))}
      </List>

      {/* bottom */}
      <Alert className="mt-auto bg-white">
        <div className="mt-4 flex gap-3">
          <Typography
            as="a"
            href="#"
            className="text-suiteblue underline text-sm hover:text-blue-800"
          >
            <Link to="/products" onClick={() => onMenuChange()}>
              <span className="flex items-center gap-1">
                See all Products <ArrowRightIcon className="h-3 w-3" />
              </span>
            </Link>
          </Typography>
        </div>
      </Alert>
    </Card>
  );
}
