import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import SingleItem from "./SingleItem";
import { FiXCircle, FiHeart } from "react-icons/fi";

const RecipeDetail = ({ isOpen, setIsOpen, recItemId, setRecItemId }) => {
  const { state } = useLocation();
  const [item, setItem] = useState(null);

  const { itemId } = useParams();
  const numberItemId = Number(itemId);
  setRecItemId(numberItemId);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`/api/test`);

        const data = await response.json();

        if (response.status === 200) {
          setItem(data.data);
        } else {
          console.error("Error: The item was not found.", data);
        }
      } catch (error) {
        console.error("The was an error fetching the item:", error);
      }
    };
    fetchItem();
  }, [numberItemId]);

  if (item && item.image) {
    return ();