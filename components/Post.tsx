import Link from "next/link";
import React from "react";

import { PostType } from "@/types";

type Props = {
  post: PostType;
};

const Post = (props: Props) => {
  const { post } = props;

  console.log(post.author.profile?.profileImageUrl);

  // URLが有効かどうかをチェックする関数
  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  // プロファイル画像のURLを取得し、無効な場合はデフォルト画像を使用
  const profileImageUrl =
    post.author.profile?.profileImageUrl &&
    isValidUrl(post.author.profile.profileImageUrl)
      ? post.author.profile.profileImageUrl
      : "/default-avatar.png";

  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <Link href={`/profile/${post.authorId}`}>
            <img
              className="w-10 h-10 rounded-full mr-2"
              src={profileImageUrl}
              alt="User Avatar"
              width={40}
              height={40}
            />
          </Link>
          <div>
            <h2 className="font-semibold text-md">{post.author?.username}</h2>
            <p className="text-gray-500 text-sm">
              {new Date(post.createdAt).toLocaleString()}
            </p>
          </div>
        </div>
        <p className="text-gray-700">{post.content}</p>
      </div>
    </div>
  );
};

export default Post;
