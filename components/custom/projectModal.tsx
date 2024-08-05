"use client";
import React, { ReactNode } from "react";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalTrigger
} from "../ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";

interface ModalProps {
    children: ReactNode;
    emoji: string;
    trigger: ReactNode;
    images: string[]
}

const ProjectModal: React.FC<ModalProps> = ({ children, emoji, trigger, images }) => {
    return (
        <div className="py-40  flex items-center justify-center">
            <Modal>
                <ModalTrigger>
                    {trigger}
                </ModalTrigger>
                <ModalBody>
                    <ModalContent className=" w-full h-screen z-20">
                        <div className="flex justify-center items-center">
                            {images.map((image, idx) => (
                                <motion.div
                                    key={"images" + idx}
                                    style={{
                                        rotate: Math.random() * 20 - 10,
                                    }}
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: 0,
                                        zIndex: 100,
                                    }}
                                    whileTap={{
                                        scale: 1.1,
                                        rotate: 0,
                                        zIndex: 100,
                                    }}
                                    className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                                >
                                    <Image
                                        src={image}
                                        alt="bali images"
                                        width="500"
                                        height="500"
                                        className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                                    />
                                </motion.div>
                            ))}
                        </div>
                        {children}
                    </ModalContent>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default ProjectModal